.. _npg-lite-flasher-web:

NPG Lite Flasher Web
#####################

.. youtube:: sKYY074Yg3A

Overview
********

NPG Lite Flasher Web is an open-source, browser-based tool to flash firmware onto the :ref:`Neuro PlayGround (NPG) Lite <neuro-play-ground-lite>` and other ESP32-based boards. There is nothing to install - open `upsidedownlabs.github.io/NPG-Lite-Flasher-Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_, connect your board with a USB cable, choose a firmware and click **Flash Firmware**.

.. figure:: media/npg-lite-flasher-web.png
    :align: center
    :alt: NPG Lite Flasher Web Landing Page

    NPG Lite Flasher Web Landing Page

Features
********

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **No Installation**
     - Runs fully in your browser using the Web Serial API. You don't need the Arduino IDE or any desktop app.
   * - **Built-in Firmwares**
     - Flash the **BLE** (wireless), **WiFi** or **Serial** (direct USB) firmware with one click.
   * - **Get from GitHub**
     - Download the latest firmware releases from the official `NPG Lite firmware <https://github.com/upsidedownlabs/npg-lite-firmware>`_ repository.
   * - **Custom Firmware**
     - Upload your own ``.bin`` file from your computer.
   * - **Local Firmware Storage**
     - Firmwares you add or download are saved in your browser, so you can flash them again without downloading them.
   * - **Automatic Flash Address**
     - Detects the correct flash address from the file name (merged image at ``0x0``, app-only binary at ``0x10000``).
   * - **Console & Progress Bar**
     - See live logs and the flashing progress while the firmware is uploaded.
   * - **Guided Tour**
     - Click **Guide** to get a step-by-step tour of the tool.

NPG Lite Flasher Web or NPG Lite Flasher?
=========================================

Both tools upload firmware to the NPG Lite. Use whichever is easier for you:

.. list-table::
   :widths: 30 35 35
   :header-rows: 1

   * -
     - **NPG Lite Flasher Web**
     - :ref:`NPG Lite Flasher <npg-lite-flasher>`
   * - **Runs in**
     - Your browser
     - Desktop app (Windows, macOS, Linux)
   * - **Installation**
     - Not needed
     - Download and install
   * - **Browser needed**
     - Chrome, Edge or Opera
     - Any
   * - **Best for**
     - Quick flashing on any computer
     - Offline use, or browsers without Web Serial

Requirements
************

Browser
=======

NPG Lite Flasher Web uses the **Web Serial API**, which works in the latest versions of Chromium-based desktop browsers:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**

Firefox, Safari and mobile browsers are not supported.

Hardware
========

- :ref:`Neuro PlayGround (NPG) Lite <neuro-play-ground-lite>` or any ESP32 board.
- A USB Type-C **data** cable (not a charge-only cable).

Setting up the Hardware
***********************

1. Turn ON the NPG Lite using the power switch on the side of the board.
2. Connect the NPG Lite to your laptop using the USB Type-C cable.

Uploading the Firmware
**********************

.. tab-set::

   .. tab-item:: Built-in Firmware

      Use this to flash the standard **BLE**, **WiFi** or **Serial** firmware.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ in a supported browser.
      2. Click **Connect Device**, select your NPG Lite's port from the list and click **Connect**. The console shows the chip it connected to (for example, ``Connected to ESP32-C6``).
      3. Select the firmware you need:

         - **BLE** (Wireless): to stream data over Bluetooth, for example to :ref:`Chords-Web <chords-web-npg-lite>`.
         - **WiFi**: to stream data over Wi-Fi.
         - **Serial** (Direct USB): to stream data over the USB cable.

      4. Check the selected firmware's name and size in the **Selected Firmware** box.
      5. Click **Flash Firmware** and wait until the progress bar reaches **100%**. Don't unplug the board while flashing.
      6. When the console shows **Flash completed successfully!**, the board restarts with the new firmware.

   .. tab-item:: Get from GitHub

      Use this to flash the latest firmware releases from Upside Down Labs.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ and click **Connect Device**.
      2. Click **Get from GitHub**. The tool fetches the list of firmwares from the latest `NPG Lite firmware release <https://github.com/upsidedownlabs/npg-lite-firmware/releases>`_.
      3. Download the firmware you need. It is saved in **Local Firmwares** so you don't need to download it again.
      4. Select the firmware and click **Flash Firmware**.
      5. Wait until the console shows **Flash completed successfully!**.

      .. note::

         If the download fails, the console shows a link to download the file manually. Download it and add it using the **Custom Firmware** steps.

   .. tab-item:: Custom Firmware

      Use this to flash a ``.bin`` file you compiled yourself.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ and click **Connect Device**.
      2. Click **Add Firmware** and select your ``.bin`` file. It is saved in **Local Firmwares** for future use.
      3. The flash address is set automatically from the file name:

         - Files with ``merged`` in the name (for example, ``NPG-LITE-BLE.ino.merged.bin``) are flashed at ``0x0``. A merged image already has the bootloader, partition table and app in one file.
         - Other files are treated as app-only binaries and flashed at ``0x10000``.

      4. Click **Flash Firmware** and wait until the console shows **Flash completed successfully!**.

      .. tip::

         In Arduino IDE, use ``Sketch > Export Compiled Binary`` to get a ``.ino.merged.bin`` file. Merged images are the easiest to flash, because you don't need to pick a bootloader or partition table.

      .. dropdown:: Advanced: Flash complete firmware

         If you only have an app-only binary but want to write the complete flash, turn on **Flash complete firmware**. Then select a **Bootloader** (flashed at ``0x0``) and a **Partition Table** (flashed at ``0x8000``) from your local firmwares. The tool adds the OTA data and writes the app at ``0x10000``.

      .. warning::

         Only change the flash address under **Advanced Option** if you know what you are doing. Writing to the wrong address can stop your board from booting. If this happens, flash a merged image at ``0x0`` to fix it.

Managing Local Firmwares
========================

The **Local Firmwares** list shows all firmwares saved in your browser, with their name, size and date.

- Click **Load** to select a firmware for flashing.
- Click **Delete** to remove a custom firmware. Built-in firmwares (with colored badges) can't be deleted.
- Click **Clear All Custom** to remove all your custom firmwares at once.

Real-Time Visualization
***********************

After flashing, you can see your biopotential signals in real time:

- **BLE or Serial firmware**: Open :ref:`Chords-Web <chords>` and click **BLE** or **Serial** to connect. See :ref:`Connecting over Bluetooth (NPG Lite) <chords-web-npg-lite>`.
- **Python**: Follow the :ref:`Chords-Python documentation <chords-pythons>`.

Troubleshooting
***************

.. dropdown:: My board doesn't appear in the port list
   :icon: alert

   - Make sure the NPG Lite is switched ON.
   - Use a USB **data** cable, not a charge-only cable.
   - Close any other app or browser tab using the port (Arduino IDE Serial Monitor, Chords-Web, NPG Lite Flasher, etc.).
   - **Linux**: Add your user to the serial port group, then log out and log back in.

     .. code-block:: bash

        sudo usermod -aG uucp $USER      # Arch / Manjaro
        sudo usermod -aG dialout $USER   # Ubuntu / Debian

.. dropdown:: Flashing fails or stops in the middle
   :icon: alert

   - Don't unplug the board or close the tab while flashing.
   - Click **Disconnect**, unplug and replug the board, then click **Connect Device** and try again.
   - If the board doesn't connect, put it in boot mode: hold the **BOOT** button, press and release **RESET**, then release **BOOT**. Then click **Connect Device** again.

.. dropdown:: The board doesn't work after flashing
   :icon: alert

   - Toggle the power switch OFF and ON to restart the board.
   - Make sure you flashed the right firmware for how you want to connect (BLE, WiFi or Serial).
   - If you flashed a custom file, check that it was flashed at the right address. Flashing a merged image at ``0x0`` fixes most problems.

GitHub Repository
*****************

For the source code, issue tracking and contribution guidelines, visit the `NPG Lite Flasher Web GitHub repository <https://github.com/upsidedownlabs/NPG-Lite-Flasher-Web>`_.
