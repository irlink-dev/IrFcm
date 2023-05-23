import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ListItemButton, ListItemText, ListItemAvatar } from '@mui/material'

interface DrawerListRowProps {
    name: string,
    desc: string,
    route: string,
    image: string
}

const DrawerListRow = ({ name, desc, route, image }: DrawerListRowProps) => {
    const router = useRouter()
    return <ListItemButton divider onClick={() => router.push(route)}>
        <ListItemAvatar sx={{ marginRight: 2 }}>
            <Image src={image} alt={name} width={64} height={64} priority={true} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={desc} />
    </ListItemButton>
}

export default DrawerListRow
