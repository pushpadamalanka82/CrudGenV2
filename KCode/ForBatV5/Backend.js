import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncBackend } from "./CrudGenerator/Backend.js";

let LocalFilesArray = StartFuncReadDataSchema();

let LocalEndPointsNeeded = ["Create", "Show"];

StartFuncBackend({
    inFilesArray: LocalFilesArray,
    inEndPointsNeeded: LocalEndPointsNeeded
});
