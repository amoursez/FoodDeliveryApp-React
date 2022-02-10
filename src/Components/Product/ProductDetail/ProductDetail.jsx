import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import Comments from '../../Comments/Comments'
import { useNavigate } from 'react-router-dom'
const ProductDetail = () => {
    const { id } = useParams()
    const { detail, getDetail, addComment,
        deleteCommnet,comment,currentUser,} = useContext(productContext)

    useEffect(() => {
        getDetail(id)
    }, [id])

    const navigate = useNavigate()
   
    return (
           <Paper elevation={0} variant="outlined">
                <Typography variant='h2' style={{textAlign: 'center'}}>Description</Typography>
                {
                    detail ? (
                        <div style={{margin: '20px 180px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <img width='600px' src={detail.image} alt={detail.name} />
                            </div>
                            <div style={{
                                width:'450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center'
                            }}
                            >
                                <Typography variant='h3'>{detail.name}</Typography>
                                <Typography variant='subtitle1' fontWeight={'700'} fontSize={'26px'} color={'#F9003C'}>{detail.category}</Typography>
                                <Typography variant='h4' fontWeight={'bold'} >${detail.price}</Typography>
                                <div style={{marginTop: '20px'}}>
                                <Button  onClick={() => navigate('/cart')}style={{backgroundColor: '#F9003C', fontSize: '26px', color: 'white',fontWeight:'bold', borderRadius: '25px'}} >Order</Button>
                                </div>
                            </div>
                           
                        </div>
                            <div style={{marginTop: '20px'}}>
                                <Typography variant='p' fontWeight={'light'} fontSize={'26px'} >{detail.description}</Typography>
                            </div>
                            
                        </div>

                    ) : (<h1>loading...</h1>)
                }
           

            
            
            
            </Paper> 

           
    );
};

export default ProductDetail;