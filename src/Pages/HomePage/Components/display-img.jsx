import Container from 'react-bootstrap/Container';
import imagewallp from '../../../assets/649639.jpg'

function Welcome(){
    return(
        <Container style={{zIndex: 90}} className='mb-5 w-100'>
            <img src={imagewallp} alt="" className='w-100'/>
        </Container>
    )
}

export {Welcome}