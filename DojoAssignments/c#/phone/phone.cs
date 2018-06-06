using System;
namespace phone{
    public abstract class Phone 
            {
                private string _versionNumber;
                private int _batteryPercentage;
                private string _carrier;
                private string _ringTone;
                public Phone(string versionNumber, int batteryPercentage, string carrier, string ringTone){
                    _versionNumber = versionNumber;
                    _batteryPercentage = batteryPercentage;
                    _carrier = carrier;
                    _ringTone = ringTone;
                }
                // abstract method. This method will be implemented by the subclasses
                public string RingTone { get => _ringTone; set => _ringTone = value; }
                public string Carrier { get => _carrier; set => _carrier = value; }
                public int BatteryPercentage { get => _batteryPercentage; set => _batteryPercentage = value; }
                public string VersionNumber { get => _versionNumber; set => _versionNumber = value; }
                public abstract void DisplayInfo();
                // public getters and setters removed for brevity. Please implement them yourself
            }
}