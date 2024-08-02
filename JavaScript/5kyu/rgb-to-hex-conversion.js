// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    function clampAndConvert(value) {
        value = Math.min(255, value);
        return Math.max(0, value).toString(16).toUpperCase().padStart(2, '0');                
    }
    
    return clampAndConvert(r) + clampAndConvert(g) + clampAndConvert(b);
}