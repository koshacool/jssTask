;
define(function () {
    return {
        /**
         * [bubble description]
         * Sort array in ascending order by bubble method
         *
         * @param array array Array for sorting
         * @return array
         */
        bubble: function () {
            var array = this;
            var tempValue = null;
            for (var i = 0; i < array.length - 1; i++) {
                for (var j = array.length - 1; j > i; j--) {
                    if (array[j] < array[j - 1]) {
                        tempValue = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = tempValue;
                    }
                }
            }
            return array;
        },

        /**
         * [insertion description]
         * Sort array in ascending order by insertion method
         *
         * @param array array Array for sorting
         * @return array
         */
        insertion: function () {
            var array = this;
            for (var i = 0; i < array.length; i++) {
                var tempValue = array[i];
                for (var j = i - 1; j >= 0 && array[j] > tempValue; j--) {
                    array[j + 1] = array[j];
                }
                array[j + 1] = tempValue;
            }
            return array;
        },

        /**
         * [selection description]
         * Sort array in ascending order by selection method
         *
         * @param array array Array for sorting
         * @return array
         */
        selection: function () {
            var array = this;
            for (var i = 0; i < array.length - 1; i++) {
                var min = i;
                for (var j = i + 1; j < array.length; j++) {
                    if (array[j] < array[min]) {
                        min = j;
                    }
                }
                var tempValue = array[min];
                array[min] = array[i];
                array[i] = tempValue;
            }

            return array;
        },
    }
});