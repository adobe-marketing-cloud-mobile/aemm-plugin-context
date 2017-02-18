/*
*  Copyright 2017 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*/

/**
 * This class represents entity download progress state
 */
var CQMDownloadState = function(state) {
    this.stateCode = (state !== undefined ? state : null);
};
// This needs to be synchronized with native implementations if there are changes
CQMDownloadState.NONE = 0;
CQMDownloadState.DOWNLOAD_PAUSED = 1;
CQMDownloadState.DOWNLOAD_ACTIVE = 2;
CQMDownloadState.DOWNLOAD_COMPLETE = 3;

module.exports = CQMDownloadState;

