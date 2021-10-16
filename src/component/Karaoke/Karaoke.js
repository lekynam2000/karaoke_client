import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Box} from '@mui/material';

export default function Karaoke(){
    const [lyris,setLyris] = useState(null);
    const [loading,setLoading] = useState(true);
    const [playing,setPlaying] = useState(false);
    const {songName} = useParams();
    const [audio] = useState(new Audio(`/song/accom/${songName}`));
    const [index,setIndex] = useState(0);
    const [milestone,setMilestone] = useState(null);
    const [offset,setOffset] = useState(0);

    useEffect(()=>{
        axios.get(`/song/lyris/${songName}`).then(res=>{
            setLyris(res.data);
            setLoading(false);
        }).catch(error=>console.log(error))
    },[]);

    function togglePlaying(){
        if(playing){
            var currMilestone = Date.now();
            audio.pause();
            setOffset(offset+currMilestone-milestone);
            setMilestone(currMilestone);       
        }else{
            audio.play();
        }
    }
    
    return (
        !loading &&(
            <Box>
                
            </Box>
        )
    )
}