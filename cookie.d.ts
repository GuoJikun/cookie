/**
 * 添加cookie
 * @param sKey cookie的key
 */
export declare function getItem(sKey: string): string;
export declare function setItem(sKey: string, sValue: string, vEnd: any, sPath: string, sDomain: string, bSecure: any): boolean;
export declare function removeItem(sKey: string, sPath: string, sDomain: string): boolean;
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
