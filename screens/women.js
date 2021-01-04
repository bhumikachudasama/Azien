import React from 'react'
import { View,Text,Button,StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

export default function Women() {
    return(

    <ScrollView style={{flex:1}} >

         {/*header style */}
<View style={styles.header} >
          <Text style={styles.headerfont} >Azien</Text>
      </View>

       { /*first Swiper */ }
        <View>
        <Swiper height={170} autoplay={true} style={{marginTop:20}} >          
        <Image source={require('../assest/womenC4.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenC2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

       <View>
           <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'grey',marginBottom:10}}>Women Collection</Text>
       </View>
       <View>
       <View style={{backgroundColor:'white', height:470,width:'98%',marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
      <View>
          <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'normal',color:'black'}}> Biggest deals on Top Brands</Text>
      </View>
       <View style={styles.distance}>
            <View style={{backgroundColor:'white', height:120,width:110 }} >
            <Image source={require('../assest/brand1.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
           <Text style={{textAlign:'center'}}>20-70% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand2.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>40-60% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand3.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>20-40% Off</Text>
            </View>
       </View>
       <View style={styles.distance}>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand4.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 40% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand5.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>50-70% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand6.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 70% Off</Text>
            </View>    
       </View>

       <View style={styles.distance}>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand7.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>30-40% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand8.jpg')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 30% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand9.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>20-40% Off</Text>
            </View>
       </View>
    
       </View>
       </View>

       <View>
        <Swiper height={650} autoplay={true} style={{marginTop:10}} >          
        <Image source={require('../assest/womenCC2.jpg')} style={{flex:1,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenCC3.jpg')} style={{flex:1,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/womenCC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

        <View style={{backgroundColor:'pink', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
        <Image source={require('../assest/womenmask.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
            </View>

         <View>
             <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'black'}}>Shop By Category</Text>
         </View>

         <View style={{backgroundColor:'skyblue', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category1.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'pink', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category2.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'green', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category3.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         <View style={{backgroundColor:'green', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/category4.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>


         <View  style={{backgroundColor:'white', height:300,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
         <View>
             <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Winter Trends</Text>
         </View>
         <View style={styles.distance}>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter1.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter2.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>

         </View>
         </View>

         <View>
        <View style={{backgroundColor:'grey',height:130,width:'100%',marginTop:20}}>
        <Image source={require('../assest/min.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
        </View>
      </View>


         <View>
          <Text style={{textAlign:'left',fontSize:20,color:'black',marginTop:10}}>More about shopping at Azien</Text>
          <Text style={{textAlign:'left',fontSize:10,color:'black',marginTop:5,paddingLeft:5}}>See More</Text>
      </View>

      
    </ScrollView>
    )
}


const styles = StyleSheet.create({


    header: {
        width: '100%',
        height: 50,
        backgroundColor:'#0099CC',
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
 
    headerfont: {
        fontSize:20,
        fontWeight: 'bold',
        paddingTop:10,
        shadowColor:'white',
        letterSpacing: 1,
        paddingLeft:45,
        color:'white',
    },

    distance: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop:10,
       },
});