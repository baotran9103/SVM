import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/Theme";
import {useHistory} from 'react-router-dom'
function Index(props) {
    let history = useHistory();
    console.log(props.token)
    const [alias, setalias] = React.useState(props.farmer_info)
    async function postData( data = {}) {
        var url =  `https://api.vastpool.net/farmer/${props.launcherid}/${props.token}`
        const response = await fetch(url, {
          method: 'POST', 
        //   mode: 'cors', 
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    const SaveEvent = ()  => {
        postData({ "name" : alias}).then(res=> res.ok ? history.push(`/account/${props.launcherid}`):alert("Could not save alias to this launcher id !")).catch(err=> alert("Could not save alias to this launcher id !"))
    }
  return (
    <Container token = {props.token}>
      <Card>
        <CardHeader> Account Settings</CardHeader>
        <CardBody>
          <div>
            <h2>General Settings</h2>
            <CardItem>
              <div>Launcher ID</div>
              <div className="card-info">{props.launcherid}</div>
            </CardItem>
            <CardItem>
              <div>Account Alias</div>
              <input value={alias} type="text" onChange={(e)=>setalias(e.target.value)}/>
            </CardItem>
          </div>
          <CardSubmit>
              <ButtonWrapper onClick={()=> SaveEvent()}>Save</ButtonWrapper>
          </CardSubmit>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Index;

const Container = styled.div`

  display: ${({token})=> token? 'flex':'none'} ;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
position:relative;

  display: flex;
  flex-direction: column;
  min-width:50%;
  max-width: 80%;
  height: 50%;
  background: white;
  /* padding:2rem; */
  border-radius: 10px;
`;
const CardHeader = styled.div`
  display: flex;
  background: ${theme.colors.cardHeader};
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
`;
const CardBody = styled.div`
  display: grid;
  padding: 1rem;
`;

const CardItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin:0.25rem;
  font-size:1rem;
  .card-info{
    padding:0.25rem 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width:90%;
  }
  input{
      padding:0.25rem 0.5rem;
  }
`;

const CardSubmit = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`
const ButtonWrapper = styled.div`
    display: flex;
    border-radius: 10px;
    background:${theme.colors.cardHeader};
    color:white;
    padding:1rem 2rem;
    position:absolute;
    bottom:0;
    margin-bottom:1rem;
    cursor:pointer;
    :hover{
        box-shadow: 1px 1px 5px rgba(0,0,0,0.5)
        /* transform:scale(1.08) */
    }
    :active{
        transform:scale(0.96)

    }
`