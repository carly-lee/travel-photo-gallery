import { OPEN_POPUP, CLOSE_POPUP, openPopup, closePopup } from 'actions/PopupActions';

describe('PopupActions', () => {
  it('should create OPEN_POPUP when openPopup is called', () => {
    const data = {"src":"/images/LD/LD_0.jpg", "location":"Oxford Circus", "city":"London"};

    const expectedAction = {
      type: OPEN_POPUP,
      data: data
    }
    expect(openPopup(data)).toEqual(expectedAction)
  })

  it('should create CLOSE_POPUP when closePopup is called', () => {

    const expectedAction = {
      type: CLOSE_POPUP
    }
    expect(closePopup()).toEqual(expectedAction)
  })
})
