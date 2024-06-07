import { IconType } from 'react-icons';

type IconProps = React.ComponentPropsWithoutRef<"a"> & {
  iconType: IconType,
}

function Icon(props: IconProps) {

  const { iconType, href } = props

  const IconComponent = iconType;
    return (
      <a href={href} target='_blank' className='group'>
        <IconComponent className="w-7 h-7 transition-all duration-300 group-hover:fill-secondary group-hover:scale-125"
        />
      </a>
    )
  }
  
  export default Icon;
  