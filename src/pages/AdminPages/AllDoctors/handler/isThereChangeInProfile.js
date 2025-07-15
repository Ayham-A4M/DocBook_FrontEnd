
const isThereChangeInWorkingDays=(arr1,arr2)=>{
    return arr1.length===arr2.length && arr1.every((item)=>(arr2.includes(item)))
}
const isThereChangeInProfile = (dataAfterChange, originalData) => {
    // this is custome method because isDirty methode with reset not working perfectly with CheckBox and if i return field after change to original value it still dirty field 
    let keys = Object.keys(dataAfterChange);
    keys=keys.filter((e)=>(e!="workingDays"));
    const isAnyFieldChange=keys.some((e)=>(
        dataAfterChange[e]!=originalData[e]
    ));
    if(isAnyFieldChange){return true}
    if(!isThereChangeInWorkingDays(dataAfterChange?.workingDays,originalData?.workingDays)){
        return true
    }
    return false;
}

export default isThereChangeInProfile