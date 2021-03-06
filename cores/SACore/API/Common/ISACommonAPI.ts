import { ICore } from 'modloader64_api/IModLoaderAPI';
import * as API from '../imports'
import { IChaoData, ChaoGarden } from '../Common/Chao/ChaoAPI';

export interface ISACommonCore extends ICore {
    chao_data: () => number;

    sonic: API.SADX.ISonic | API.SA2B.ISonic;
    chao: API.ChaoAPI.IChaoGarden;
    save: API.SADX.ISaveContext | API.SA2B.ISaveContext;
    helper: API.SADX.ISADXHelper | API.SA2B.ISA2BHelper;
    global: API.SADX.IGlobalContext | API.SA2B.IGlobalContext;
}

export interface ITime {
  /* 0x0 */ minutes: number; // 0x1
  /* 0x1 */ seconds: number; // 0x1
  /* 0x2 */ frames: number; // 0x1
}