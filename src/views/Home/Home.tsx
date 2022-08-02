import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import logo from '../../images/logo.png';
import './Home.scss';

export const Home = () => {
    const { text } = useTypewriter({
        words: ['Student', 'Software Developer'],
        loop: 0,
      })

    return(
        <div className='container2 frame'>

        <div className='profile'>
          <div className='name'>Hi,i'm <span>Ashish Dabral</span>

          </div>
          <div> 
          i'm a{' '}
          {text}
          <Cursor cursorStyle='_' />
          </div>
        
        </div>
        
        <div className='avatar'>
          <img src={logo} />
        </div>
        

      </div>
    )
}