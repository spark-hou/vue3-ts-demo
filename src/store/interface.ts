/**
 * @author  sparkHou
 * @date 2021-04-15 08:50
 * @Description:
 */
import UserType from '@/store/module/user/interface'
import ThemeType from '@/store/module/theme/interface'

export default interface RootState {
  user: UserType,
  theme: ThemeType
}
