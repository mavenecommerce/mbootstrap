<?php
/**
 * Maven extension for Magento
 *
 * @category   Maven
 * @package    Maven_Bootstrap
 * @copyright  Copyright (C) 2013 MavenEcommerce Inc. (http://www.mavenecommerce.com/)
 */

class Maven_Cms_Helper_Data extends Mage_Core_Helper_Abstract
{

    public function isAdmin()
    {
        if (Mage::app()->getStore()->isAdmin()) {
            return true;
        }

        if (Mage::app()->getRequest()->getModuleName() == 'adminhtml') {
            return true;
        }

        return false;
    }

}