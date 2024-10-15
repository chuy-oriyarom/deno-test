import { objData } from "../model/sample_data.model.ts";

export function procesateDataObj(){

      /* console.debug(obj);
      console.debug(typeof obj); */
      const entries = Object.entries(objData);
      entries.forEach(([key, value]) => {
          console.debug(`${key}: ${value}`);
      });
}