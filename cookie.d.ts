/**
 * 获取cookie
 * @param sKey cookie的key
 */
export declare function getItem(sKey: string): string;
/**
 * 添加cookie
 * @param sKey
 * @param sValue
 * @param vEnd
 * @param sPath
 * @param sDomain
 * @param bSecure
 */
export declare function setItem(sKey: string, sValue: string, vEnd: any, sPath: string, sDomain: string, bSecure: any): boolean;
/**
 * 移除cookie
 * @param sKey
 * @param sPath
 * @param sDomain
 */
export declare function removeItem(sKey: string, sPath?: string, sDomain?: string): boolean;
/**
 * 是否存在cookie
 * @param sKey
 */
export declare function has(sKey: string): boolean;
/**
 * 查看当前所有的cookie
 */
export declare function keys(): string[];
/**
 * 清除cookie
 */
export declare function clear(): void;
declare const _default: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
    has: typeof has;
    keys: typeof keys;
    clear: typeof clear;
};
export default _default;
