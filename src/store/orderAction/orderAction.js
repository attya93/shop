export const Order_Type_Set = "Order_set";
export const Order_Type_Add = "Order_QTY_Add";
export const Order_Type_SUB = "Order__QTY_Sub";
export const Order_Type_RM = "Order_RM";
export const Order_Type_Result = "Order_Result";


export const Order_Set = (val) => ({ type: Order_Type_Set, initail: val });
export const Order_ADD = (id) => ({ type: Order_Type_Add, id: id });
export const Order_SUB = (id) => ({ type: Order_Type_SUB, id: id });
export const Order_RM = (id) => ({ type: Order_Type_RM, id: id });
export const Order_Result = () => ({ type: Order_Type_Result });

