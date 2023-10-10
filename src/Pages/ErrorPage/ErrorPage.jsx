import wallpaper from '../../assets/2211.w026.n002.2793B.p1.2793.jpg'
import './ErrorPage.scss'

export default function ErrorPage(){
    const wallpaperStyle = {
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Optional
        height: '100vh', // Make the container cover the viewport height
        display: 'flex'
    }
    return(
        <div className='ErrorPage' style={wallpaperStyle} >
            <div className="glitch" data-text="404 Error">404 Error</div> 
        </div>
    )
}

