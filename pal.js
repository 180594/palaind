var left=0;
var right= str.lenght ;
var str = "";


function palaindrom() {
    if (left >= right) {
        return true 
        
    }
    if (str[left]===str[right]) {
        return palaindrom (str[left+1],str[right-1])
        
    }
    else if (str[left]!==str[right]) {
        return false 
        
    }
    
}
var str ='lool'
console.log(str,0,str.lenght-1 );
