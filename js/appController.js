function appController($scope)
{
    /**
     *  Private Method: _run()
     *  The main function of the appController, where all the magic
     *      happens.
     */
    function _run() {
        // this variable will define which style will be loaded on the image list view 
        $scope.section = "subapp";

        var imageSource;

        imageSourcePath = "assets/images/";

        // list of media elements to be displayed on the list
        productList = ["refrigerator","air-conditioner","washing-machine", "bed"];
        $scope.mediaList = [ 
            [
                {
                    imagePath: imageSourcePath + 'refrigerator.jpg',
                    imageDesc: "This is refrigerator",
                },
                {
                    imagePath: imageSourcePath + 'air-conditioner.jpg',
                    imageDesc: "This is air-conditioner",
                },
                {
                    imagePath: imageSourcePath + "washing-machine.jpg",
                    imageDesc: "This is washing-machine",
                },
                {
                    imagePath: imageSourcePath + "bed.jpg",
                    imageDesc: "This is bed",
                }
            ]
        ];

        //$scope.myFunc() = function($index) {
           // $scope.
        //}
    };

    // Runs the main method of this class
    _run();
}
