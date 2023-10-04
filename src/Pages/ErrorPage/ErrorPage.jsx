import wallpaper from '../../assets/2211.w026.n002.2793B.p1.2793.jpg'

export default function ErrorPage(){
    const wallpaperStyle = {
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Optional
        height: '100vh', // Make the container cover the viewport height
        display: 'flex'
    }
    return(
        <div style={wallpaperStyle} >
            <p>Error 404</p>
        </div>
    )
}

