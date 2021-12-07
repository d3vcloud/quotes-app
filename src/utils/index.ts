/**
 *
 * @param text - Text to copy
 */

export const copyTextToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};
