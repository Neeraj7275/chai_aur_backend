import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message : "ok"
    })
})

export {registerUser};

// export default ho tabhi ham log man chaha name de sakte nhi vaise nhi de sakate hai
// {}is tarah se import lene ke lie {}is tarah se export nhi hona bhi jaruri hai