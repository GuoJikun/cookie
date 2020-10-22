/**
 * 获取cookie
 * @param sKey cookie的key
 */
export function getItem(sKey: string) {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
            encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ),
        "$1"
      )
    ) || null
  );
}
/**
 * 添加cookie
 * @param sKey
 * @param sValue
 * @param vEnd
 * @param sPath
 * @param sDomain
 * @param bSecure
 */
export function setItem(
  sKey: string,
  sValue: string,
  vEnd: any,
  sPath: string,
  sDomain: string,
  bSecure: any
) {
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }
  let sExpires = "";
  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires =
          vEnd === Infinity
            ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
            : "; max-age=" + vEnd;
        break;
      case String:
        sExpires = "; expires=" + vEnd;
        break;
      case Date:
        sExpires = "; expires=" + vEnd.toUTCString();
        break;
    }
  }
  document.cookie =
    encodeURIComponent(sKey) +
    "=" +
    encodeURIComponent(sValue) +
    sExpires +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "") +
    (bSecure ? "; secure" : "");
  return true;
}
/**
 * 移除cookie
 * @param sKey
 * @param sPath
 * @param sDomain
 */
export function removeItem(sKey: string, sPath?: string, sDomain?: string) {
  if (!sKey || !has(sKey)) {
    return false;
  }
  document.cookie =
    encodeURIComponent(sKey) +
    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "");
  return true;
}
/**
 * 是否存在cookie
 * @param sKey
 */
export function has(sKey: string) {
  return new RegExp(
    "(?:^|;\\s*)" +
      encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
      "\\s*\\="
  ).test(document.cookie);
}
/**
 * 查看当前所有的cookie
 */
export function keys() {
  const cookies = document.cookie.replace(
    /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
    ""
  );
  if (cookies === "") {
    return [];
  } else {
    let aKeys = cookies.split(/\s*(?:\=[^;]*)?;\s*/);
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  }
}
/**
 * 清除cookie
 */
export function clear() {
  const keyList = keys();
  for (const key of keyList) {
    removeItem(key);
  }
}
export default {
  setItem,
  getItem,
  removeItem,
  has,
  keys,
  clear,
};
