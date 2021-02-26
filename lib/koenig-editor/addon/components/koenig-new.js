import $ from 'jquery';
import Component from '@ember/component';
import {
    IMAGE_EXTENSIONS,
    IMAGE_MIME_TYPES
} from 'ghost-admin/components/gh-image-uploader';
import {action, computed, set, setProperties} from '@ember/object';
import {utils as ghostHelperUtils} from '@tryghost/helpers';
import {isEmpty} from '@ember/utils';
import {run} from '@ember/runloop';
import {inject as service} from '@ember/service';

const {countWords} = ghostHelperUtils;

export default Component.extend({
});
