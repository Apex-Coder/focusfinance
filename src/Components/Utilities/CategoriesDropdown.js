import React from 'react';

const CategoriesDropdown = () => {
    return (
        <>
            <option /* selected="true" */ disabled="disabled">Choose Category</option> 
            <option value="Food" key="">Food</option>
            <option value="Social Life" key="Social-Life">Social Life</option>
            <option value="Transportation" key="Transportation">Transportation</option>
            <option value="Culture" key="Electronics">Electronics</option>
            <option value="Groceries" key="Groceries">Groceries</option>
            <option value="Education" key="Education">Education</option>
            <option value="Gift" key="Gift">Gift</option>
            <option value="Health" key="Health">Health</option>
            <option value="Subscriptions" key="Subscriptions">Subscriptions</option>
            <option value="Miscellaneous" key="Miscellaneous">Miscellaneous</option>
            <option value="Other" key="Other">Other</option>
        </>
    );
};

export default CategoriesDropdown;