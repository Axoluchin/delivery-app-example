import { Image } from 'react-native'
import PhotoCircleProps from '../types/components/PhotoCircleProps'

const PhotoCircle = ({ size, url, style }: PhotoCircleProps) => (
  <Image
    source={{
      uri: url
    }}
    style={{ ...style, height: size, width: size, borderRadius: size / 2 }}
  />
)

export default PhotoCircle
