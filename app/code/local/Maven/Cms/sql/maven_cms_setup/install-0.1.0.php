<?php

/**
 * Maven extension for Magento
 *
 * @category   Maven
 * @package    Maven_Bootstrap
 * @copyright  Copyright (C) 2013 MavenEcommerce Inc. (http://www.mavenecommerce.com/)
 */

/** @var $this Montelle_Cms_Model_Resource_Setup */
$this->startSetup();
/** @var $connection Varien_Db_Adapter_Pdo_Mysql */
$connection = $this->getConnection();

$defaultContent = <<<HTML
<ul class="nav nav-pills">
    <li><a href="{{store direct_url="about-magento-demo-store"}}">About Us</a></li>
    <li><a href="{{store direct_url="customer-service"}}">Customer Service</a></li>
    <li class="last privacy"><a href="{{store direct_url="privacy-policy-cookie-restriction-mode"}}">Privacy Policy</a></li>
</ul>
HTML;
$this->installBlocks(array(
    'footer_links' => array(
        'title'   => 'Footer Links',
        'content' => $defaultContent
    )));

$this->endSetup();
