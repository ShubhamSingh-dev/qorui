"use server";
import path from "path";
import { cache } from "react";
import { promises as fs } from "fs";

// Create a cached version of the file reading operation
const readFileCache = cache(async (filePath: string) => {
    return await fs.readFile(filePath, "utf-8");
});

// Improve caching for the entire component getter
export const getComponent = async (fileName: string | null, folder: string) => {
    const baseDir = path.join(process.cwd(), "components/codesnippetui");
    if (!fileName || fileName === "undefined") {
        const fullPath = path.join(baseDir, `${folder}.tsx`);
        // console.log("fullPath", fullPath);
        return await readFileCache(fullPath);
    }

    console.log("here");
    const fullPath = path.join(baseDir, folder, `${fileName}.tsx`);

    return await readFileCache(fullPath);
};

export type CopyComponentState = {
    error: string;
    content: string;
    success: boolean;
}

export const copyComponent = async (previousState: CopyComponentState, formData: FormData) => {
    try {
        const folder = formData.get("folder") as string;
        const fileName = formData.get("fileName") as string;

        if(!folder || !fileName){
            return {
                error: "Missing folder or file name",
                content: "",
                success: false,
            }
        }

        const content = await getComponent(fileName as string, folder as string);

        if (!content) {
            return {
                error: "Component not found",
                content: "",
                success: false,
            };
        }

        return {
            error: "",
            content,
            success: true,
        };
    } catch (error) {
        console.error(error);
        return {
            error: "Failed to copy component",
            content: "",
            success: false,
        };
    }
}