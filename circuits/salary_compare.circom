pragma circom 2.0.0;

template SalaryCompare() {
    // Private inputs
    signal private input salary1;
    signal private input salary2;
    
    // Public output
    signal output isEqual;
    
    // Comparison logic
    isEqual <== salary1 === salary2;
}

component main = SalaryCompare();
