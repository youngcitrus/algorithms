/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {    
    
    /* 1)findLargest nunber in left side of pointer
      2)flip to start
      3)Again flip reverse to current pointer
      4)decrement pointer
      5)Repeat process 1 to 4 until all pan cakes are sorted */
      let res=[];
      if(isSorted(A))
          return res;
      let rPointer=A.length -1;
      for(let i =0; i < A.length; i++){
          let lNum=findLargestPosition(A, rPointer); 
          if(rPointer > 0){
              if(isSorted(A))
                  return res;  
              A=flip(A, lNum);           
              res.push( lNum+1 );          
              A=flip(A, rPointer);
              res.push(rPointer +1);            
              rPointer--;            
          }           
      }    
      
      
      return res;    
  };
  
  function findLargestPosition(A, pointer){
      let t=0, pos=-1;
      for(let i =0; i <= pointer; i++){
         if(A[i] > t){
             pos=i;
             t= A[i];
         } 
      }
      return pos;    
  }
  
  function flip(A, position){   
      let outp=""; 
      let i =0, j= position;
      while(i < j){
          let t= A[i];
          A[i]= A[j];
          A[j]=t;
          i++;
          j--;
      }       
      return A;
  }
  
  function isSorted(A){
      let flag=true;
      for(let i = 1; i < A.length; i++){
          if(A[i-1] > A[i])
              return false;
      }
      return flag;
  }