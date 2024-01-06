import React from 'react'
import { products } from '../Products'

const LearnMap2 = () => {
    
    
    let task1=()=>{
        let list=products.map((items,i)=>{
            return <div>{items.title}</div>
        })
        return list
    }


    let task2=()=>{
        let list=products.map((items,i)=>{
            return(
            <div key={i}>
                {items.title} costs NRs. {items.price} and its category is{" "}{items.category}

            </div>)
        })
        return list
    }

   
    let task3=()=>{
        let list=products
        .filter((items,i)=>{
            if(items.price>2000){
                return true;
            }
        })

        .map((items,i)=>{
            return(
                <div key={i}>
                    {items.title} costs NRs. {items.price} and its category is{" "}{items.category}
    
                </div>)

        })
        return list
    }


    let task4=()=>{
        let list=products
        .filter((items,i)=>{
            if(items.category==="Books"){
                return true;
            }
        })
        .map((items,i)=>{
            return(
                <div key={i}>
                    {items.title} costs NRs. {items.price} and its category is{" "}{items.category}
    
                </div>)

        })
        return list
    }


    let task5=()=>{
        let totalPrice = products.reduce((pre,cur)=>{
            return pre+cur.price
        },0)
        return totalPrice

    }


    let task6=()=>{
        let list = products.map((items,i)=>{
            return(
                <div key={i}>
                    {items.title} costs NRs. {items.price}
                </div>)

            })

        return list
    }


    let task7=()=>{
        let list = products.map((items,i)=>items.category)
        let list1 = [...new Set(list)];

        return(
            <div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {list1.map((category,i)=>
                    <li>{category}</li>)
                    }
                </ul>
            </div>
        )
    };

    let task8=()=>{
        let list= products.map((items,i)=>{
            return(
                <div>
                    {items.title} is manufactured at {items.manufactureDate}
                </div>
            )
        })
        return list

    }
        

    let task9=()=>{
        let list=products
        .filter((items,i)=>{
            if(items.isAvailable===true){
                return true;
            }
        })
        .map((items,i)=>{
            return(
                <div key={i}>
                    {items.title}
                </div>)
        }) 
        return list   
    } 


    let task10=()=>{
        let totalPrice = products.reduce((pre,cur)=>{
            if (cur.isAvailable === true)
            {
                return (pre + cur.price);
            }
            return pre;
        },0)
        return totalPrice
    }
    



   
        
    
     
  
  return (
    <div>
        <h1>The products in our shop are:</h1>
        {
            task1()
        }
        <h1>The details about the products are:</h1>

        {
            task2()
        }
        <h1>The products whose price is greater than 2000 are:</h1>
        {
            task3()
        }
        <h1>The products whose category is books are:</h1>
        {
            task4()
        }

        <h4>The total price of all products is NRs. {task5()} </h4>

        <h1>The costs of all goods are:</h1>
       {task6()}
    
       <h2>The categories of items are:</h2>
       {
        task7()
       }
       <h2>The manufactured date of products are :</h2>

       {
        task8()
       }

       <h2>The available items are:</h2>
       {
        task9()
       }

       <h2>The total price of available items is:{task10()}</h2>


       


        
    </div>
  )
}

export default LearnMap2