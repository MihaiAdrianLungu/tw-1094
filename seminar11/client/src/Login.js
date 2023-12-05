import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchLogin = async () => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            }
    
            const result = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, options)
            const reponse = await result.json();
    
            if(reponse.success) {
                localStorage.setItem('token', reponse.data);
                navigate('/')
            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="formWrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.." 
               onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
                onChange={(e) => setPassword(e.target.value)}/>

            <input type="submit" value="Submit" onClick={() => fetchLogin()}/>
            {error.length > 0 && <p>{error}</p>}
        </div>
    )
}

export default Login;