import React,{useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const [dist , setDist] = useState(0) ; 
    const[country , setCountry] = useState('') ; 
    const[waste,setWaste] = useState(0) ; 
    const[transport,setTransport] = useState('') ; 
    const[days,setDays] = useState(0) ;
    const[click,setClicked] = useState(false); 
    const[diet,setDiet] = useState('') ; 
    const[electricity,setElectricity] = useState(0);
    const [res, setRes] = useState(0);
    const [op, setOp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [mode , setMode] = useState('light');
    return (
        <NoteContext.Provider value={{ dist , setDist , waste,setWaste , transport , setTransport , days , setDays,country , setCountry,click , setClicked , diet , setDiet , electricity , setElectricity,res , setRes , op,setOp , loading,setLoading , error,setError , mode , setMode }}>
            {props.children}
        </NoteContext.Provider>
    );}

    export default NoteState;