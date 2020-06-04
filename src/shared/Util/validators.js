const Validator_Type_Required = "Required";
const Validator_Type_MIN = "Min";
const Validator_Type_MAX = "Max";
const Validator_Type_Email = "Email";
const Validator_Type_File = "File";
const Validator_Type_Number = "Number";
export const Vaildator_Require = () => ({ type: Validator_Type_Required });
export const Vaildator_File = () => ({ type: Validator_Type_File });
export const Vaildator_Email = () => ({ type: Validator_Type_Email });
export const Vaildator_Min = (val) => ({ type: Validator_Type_MIN, val: val });
export const Vaildator_Max = (val) => ({ type: Validator_Type_MAX, val: val });
export const Vaildator_Number = () => ({ type: Validator_Type_Number, });

export const validate = (value, rules) => {
    let isVaild = true;
    for (const rule of rules) {
        if (rule.type === Validator_Type_Required) {
            isVaild = isVaild && value.trim().length > 0;
        }
        if (rule.type === Validator_Type_MIN) {
            isVaild = isVaild && value.trim().length > rule.val
        }
        if (rule.type === Validator_Type_MAX) {
            isVaild = isVaild && value.trim().length < rule.val
        }
        if (rule.type === Validator_Type_Email) {
            isVaild = isVaild && /^\S+@\S+\.\S+$/.test(value)
        }
        if (rule.type === Validator_Type_Number) {
            isVaild = isVaild && parseInt(value) > 0;
        }
    }
    return isVaild;
};