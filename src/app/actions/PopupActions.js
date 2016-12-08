export const OPEN_POPUP = 'OPEN_POPUP';
export function openPopup( data ) {
  return {
    type: OPEN_POPUP,
    data: data
  }
}

export const CLOSE_POPUP = 'CLOSE_POPUP';
export function closePopup() {
  return {
    type: CLOSE_POPUP
  }
}
