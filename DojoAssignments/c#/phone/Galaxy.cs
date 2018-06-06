using System;
namespace phone
{
    public class Galaxy : Phone, IRingable 
    {
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return "Ring from Galaxy";
        }
        
        public string Unlock() 
        {
            return "Ring from Galaxy";
        }
        public override void DisplayInfo() 
        {
            // your code here            
        }
}
        
}