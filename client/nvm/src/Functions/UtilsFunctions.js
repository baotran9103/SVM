import store from '../redux/Store'
import * as utilsActions from '../redux/Utils/Action'

export const ChangethemeEvent = (data) => {
    store.dispatch(utilsActions.ChangeTheme(data))
}