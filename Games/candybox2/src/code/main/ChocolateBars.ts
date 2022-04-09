///<reference path="StatusBarResource.ts"/>

class ChocolateBars extends StatusBarResource{
    // Constructor
    constructor(game: Game, savingPrefix: string){
        super(game, savingPrefix);
    }
    
    // Public methods
    public getCurrentAsString(totalSize: number = 10): string{
        var n: number = this.getCurrent();
        var size: number = totalSize;
        
        var base: string = "";
        var prefix: string = "";
        var suffix: string = "";
        
        // We set the base or return right now in some special cases
        if(n < 0)
            return "What, negative chocolate bars?!";
        else if(n == 1)
            return "You have 1 chocolate bar";
        else
            base = Algo.numberToStringButNicely(n);
        
        // How much space do we still have ?
        size = totalSize - base.length;
        
        // We set the suffix
        if(size >= 15){
            suffix = " chocolate bars";
            
            // We add a suffix
                // How much space do we still have ?
                size = totalSize - base.length - suffix.length;
                
                // We set the prefix
                if(size >= 9) prefix = "You have ";
                else if(size >= 3) prefix = "-> ";
        }
        else if(size >= 3) suffix = " cb";
        
        // How much space do we still have ?
        size = totalSize - base.length - prefix.length - suffix.length;
        
        return prefix + base + suffix;
    }
}