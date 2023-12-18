import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

   const priceOptions= [
        {
          "id": 1,
          "name": "Basic",
          "price": 30.99,
          "features": [
            "Access to cardio equipment",
            "Limited access to weight lifting area",
            "Group fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Full access to cardio and weight lifting areas",
            "Unlimited group fitness classes",
            "Locker room access"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 79.99,
          "features": [
            "24/7 gym access",
            "Personalized training sessions",
            "Access to sauna and spa facilities"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-5">
           {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;