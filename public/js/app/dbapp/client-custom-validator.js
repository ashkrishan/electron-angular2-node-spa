"use strict";
var CustomValidators = (function () {
    function CustomValidators(_clientService) {
        this._clientService = _clientService;
    }
    CustomValidators.clientIdExists = function (control) {
        var q = new Promise(function (resolve, reject) {
            if (control.value === 'john.doe@gmail.com') {
                resolve({ 'duplicated': true });
            }
            else {
                resolve(null);
            }
        });
        return q;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudC1jdXN0b20tdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQTtJQUVJLDBCQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFFckQsQ0FBQztJQUVJLCtCQUFjLEdBQXJCLFVBQXNCLE9BQWdCO1FBQ3BDLElBQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFjLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFFL0MsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCx1QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksd0JBQWdCLG1CQWtCNUIsQ0FBQSIsImZpbGUiOiJkYmFwcC9jbGllbnQtY3VzdG9tLXZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgSVZhbGlkYXRpb24ge1xyXG4gICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudFNlcnZpY2U6IENsaWVudERhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICBzdGF0aWMgY2xpZW50SWRFeGlzdHMoY29udHJvbDogQ29udHJvbCkge1xyXG4gICAgY29uc3QgcSA9IG5ldyBQcm9taXNlPElWYWxpZGF0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGNvbnRyb2wudmFsdWUgPT09ICdqb2huLmRvZUBnbWFpbC5jb20nKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHsnZHVwbGljYXRlZCc6IHRydWV9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
