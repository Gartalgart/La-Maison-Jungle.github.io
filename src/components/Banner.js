import logo from '../assets/logo.png';

function Banner(){
    const title = 'La maison jungle';
    return (
        <div className="banner">
            <h1 className='title-banner'>{title}</h1>
            <img src={logo} alt='La Maison Jungle' className='logo-banner' />
        </div>
    )
    
}

export default Banner