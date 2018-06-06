using System;
namespace phone
{
    public class Nokia : Phone, IRingable 
{
    public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
        : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return "Ring from Nokia";
        }
        public string Unlock() 
        {
            return "Unlock from Nokia";
        }
        public override void DisplayInfo() 
        {
            // your code here            
        }
}
        
}