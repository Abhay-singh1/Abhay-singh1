import styled from 'styled-components';
import React, {useState} from 'react'
// import axios from 'axios'
const FormDiv = styled.div`
    display:block;
    box-sizing:border-box
    padding-left:20%;
    padding-bottom:2%;
`;

const Form = styled.form`
    text-align:left;
    width:90%;
    margin: auto;
    box-shadow:1px 1px 4px 1px white;
`;

const ElementDiv = styled.div`
    
`;

const Label = styled.label`
    
    display:block;
    color:white;
    letter-spacing:0.3rem;
    margin-bottom:7px;
    font-family: 'Fugaz One', cursive;
    font-family: 'Roboto', sans-serif;
`;

const Input = styled.input`
    width:100%;
    margin:0 auto;
    padding:10px;
    border:none;
`;

const TextArea = styled.textarea`
    width:100%;
    margin:0 auto;
    padding:10px;
    border:none;
`;

const ButtonDiv = styled.div`
    display:flex;
    padding-bottom:15px;
    padding-top:15px;
    justify-content: center;
`;

const Button = styled.button`
    left:50%;
`;

const Msg = styled.div`
    display:${props => props.dis ==true ? 'block' : 'none'};
    text-align:center;
    margin:auto;
    margin-bottom:10px;
    letter-spacing:0.2rem;
    font-weight:bold;d
`;

const Header = styled.h2`
    color:white;
    @media(max-width:375px){
        font-size: 1.3em;
    }
    `;

function EmailForm (){

    const [firstname, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    

    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }
    const handleSent = (e)=>{
        
        setSent(true)
    }
    

     const formSubmit =  (e)=>{
        e.preventDefault()
        let data={
            firstName:firstname,
            lastName:lastName,
            email:email,
            message:message,
            sent:true
        }
       
        console.log('going to post',data)
//         axios.post('/aboutme/forms',data).then(()=>{
//             console.log('posting....')
//             setSent(true)
            
//         }).catch((err)=>{

//             console.log(err,'Message could not be delivered!!!');
//         })
        
    }
    const resetForm = ()=>{
        
        setSent(true)
    }
  

    return(
        <FormDiv>
            <Header> ~~~POWER TO CONTACT ME~~~ </Header>
            <Form onSubmit={ formSubmit}>
                <ElementDiv>
                    <Label>FirstName</Label>
                    <Input type='text'
                     name='firstname'
                     placeholder='Your Name..'
                     value={firstname}
                     onChange={handleFirstName}
                     />
                </ElementDiv>
                <ElementDiv>
                    <Label>Last Name</Label>
                    <Input type='text'
                     name='lastname' 
                     placeholder='Your Last Name..' 
                     value={lastName}
                     onChange={handleLastName}
                     />
                </ElementDiv>
                <ElementDiv>
                    <Label>Email</Label>
                    <Input type='email' 
                    name='email' 
                    placeholder='Your email..'
                    value={email}
                    onChange={handleEmail}
                    />
                </ElementDiv>
                <ElementDiv>
                    <Label>Text Area</Label>
                    <TextArea  name='message' 
                    placeholder='Your message..' 
                    cols='30' rows='5'
                    value={message}
                    onChange={handleMessage}
                    />
                </ElementDiv>
                
                <Msg dis={sent}>Your message has been sent!</Msg>

                <ButtonDiv>
                    <Button onClick={resetForm} type='submit'>SEND</Button>
                </ButtonDiv>

            </Form>
        </FormDiv>

    )
}

export default EmailForm;
