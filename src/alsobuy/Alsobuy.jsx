import Button from "./Button";




function Alsobuy(){
    return(
      <div className="hidden sm:block"> 
      <div className="flex ml-0 font-roboto font-smedium sm:ml-20 pl-3  mt-5 flex-wrap text-blue-500 ">Also Buy</div>
    <div className="flex ml-0 sm:ml-20 pl-3  mt-2 flex-wrap ">
    
        <Button 
        listContent="Investment" 
        bodyContent="LIC Plans" 
         listContentColor="#ff9a9a"
      />
      <Button 
        listContent="Term Life" 
        bodyContent="Return of Premium" 
        listContentColor="#ff9a9a"

      />
      <Button 
        listContent="Term Life" 
        bodyContent="Life Insurance for Housewives" 
        listContentColor="#ff9a9a"
         
      />
      <Button
        listContent=" Health Insurance" 
        bodyContent="Day 1 Coverage" 
        listContentColor="#ff9a9a"
         
      />
        <Button
        listContent=" Health Insurance" 
        bodyContent="1 Cr Health Insurance" 
        listContentColor="#ff9a9a"
         
      />
        <Button
        listContent="Health Insurance" 
        bodyContent="Personal Accident" 
        listContentColor="#ff9a9a"
         
      /> 
       <Button
      listContent=" Motor Insurance" 
      bodyContent="Commercial Vehicles" 
       listContentColor="#00b8d9"
    /> 
     <Button
    listContent=" Business Insurance" 
    bodyContent="Marine Insurance"
    listContentColor="#00b8d9" 
  />  
  <Button
  listContent=" Business Insurance" 
  bodyContent="Professional Indemnity for Doctors" 
   listContentColor="#00b8d9"
/> 
 <Button
        listContent=" Business Insurance" 
        bodyContent="Directors & Officers Liability" 
         listContentColor="#00b8d9"
      /> 
       <Button
      listContent=" Business Insurance" 
      bodyContent="Workmen Compensation" 
       listContentColor="#00b8d9"
    />
      <Button
        listContent=" Others" 
        bodyContent="Pet Insurance" 
        listContentColor="#6b778c"
      />
    </div></div>
    )
}
export default Alsobuy;