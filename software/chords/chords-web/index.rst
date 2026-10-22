.. _chords:

Chords-Web
###############

.. youtube:: vwmID4WjRrE?si=QdjEdg9xENhE_Ubp

Overview
********

Chords-Web is an open-source web application for real-time visualization of bio-potential signals like EEG, EMG, ECG and EOG. It is an advanced alternative to the standard Arduino IDE serial plotter, made for students, researchers and hobbyists who want to record biopotential data using `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

Chords-Web runs completely in your browser - there is nothing to install. Open `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech/>`_, connect your board over USB or Bluetooth, and start visualizing.

.. figure:: ./media/chords_landing_page.*
    :align: center
    :alt: Chords-Web Landing Page

    Chords-Web Landing Page

.. note::

   Chords-Web is made for **educational and research purposes**. It is not medical software and must not be used for diagnosis.

Quick Start
***********

If you are new to Chords-Web, follow these five steps. Each step is explained in detail in the sections below.

1. **Hardware**: Connect your BioAmp sensor to a :ref:`supported development board <chords-supported-boards>` and place the electrodes on your body.
2. **Firmware**: Upload the Chords firmware to your board (see :ref:`chords-uploading-firmware`).
3. **Open Chords-Web**: Go to `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech/>`_ in a :ref:`supported browser <chords-browsers-compatibility>` and click **Visualize Now**.
4. **Connect**: Click **Serial** (USB cable) or **BLE** (Bluetooth, NPG Lite only) in the bottom bar and select your device.
5. **Choose a view**: Use the app switcher in the bottom bar to open the :ref:`Chords Visualizer <chords-visualizer>`, :ref:`FFT Visualizer <chords-web-fft-visualizer>`, :ref:`Rep-Forge <chords-web-rep-forge>` or :ref:`ECG Visualizer <chords-web-ecg-visualizer>`.

Requirements
************

.. _chords-browsers-compatibility:

Browser Compatibility
=====================

Chords-Web talks to your board directly from the browser using these web APIs:

- **Web Serial API**: to connect boards over a USB cable.
- **Web Bluetooth API**: to connect the NPG Lite over Bluetooth Low Energy (BLE).
- **WebUSB API**: to update the firmware of some boards from the browser.

Not every browser supports all three APIs, so some features may not work in your browser:

.. list-table::
   :widths: 28 24 24 24
   :header-rows: 1

   * - **Browser**
     - **Serial (USB)**
     - **Bluetooth (BLE)**
     - **Firmware update**
   * - Google Chrome, Microsoft Edge, Opera
     - Yes
     - Yes
     - Yes (all boards)
   * - Mozilla Firefox 151 or later
     - Yes
     - No
     - Some boards only
   * - Safari
     - No
     - No
     - No

For all features, use the latest version of **Google Chrome**, **Microsoft Edge** or **Opera**. Firefox supports Web Serial from **version 151**. Older Firefox versions can't connect to your board and will show the unsupported browser message.

If your browser does not support the Web Serial API, Chords-Web shows a message telling you to switch to a supported browser.

.. warning::

   **Using Firefox 151 or later?** You can connect your board over **Serial** and use all the applications. But Firefox doesn't support Web Bluetooth or WebUSB, so:

   - The **BLE** button won't work, so you can't connect the NPG Lite over Bluetooth. Connect it over Serial instead.
   - The in-browser :ref:`firmware update <chords-firmware-update>` doesn't work for boards that are flashed over WebUSB: Arduino UNO R4 Minima, Arduino GIGA R1, STM32G4 Core Board, STM32F4 Black Pill and Raspberry Pi Pico. Update these boards using Chrome/Edge or the Arduino IDE. Other boards can be updated in Firefox, because they are flashed over Web Serial.

.. important::

   Chords-Web works only on **desktop/laptop** computers. If you open it on a phone, you will see an "Oops! Mobile Detected" message.

.. tip::

   **Brave** is Chromium-based, but it turns off Web Serial and Web Bluetooth by default. If you use Brave, enable them from ``brave://settings/content`` or use Chrome/Edge instead.

For more information, refer to MDN Web Docs on the `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_ and the `Web Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API>`_.

Software Requirements
=====================

- A :ref:`supported browser <chords-browsers-compatibility>`.
- Chords firmware on your board. You can upload it in any of these ways:

  - Directly from Chords-Web (see :ref:`chords-firmware-update`).
  - Using the Arduino IDE and the `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.
  - Using the :ref:`NPG Lite Flasher Web <npg-lite-flasher-web>` (in your browser) or the :ref:`NPG Lite Flasher <npg-lite-flasher>` (desktop app) for the NPG Lite or other ESP32 based boards.

Hardware Requirements
=====================

- A :ref:`supported development board <chords-supported-boards>` (or an :ref:`NPG Lite <neuro-play-ground-lite>`, which has a built-in BioAmp).
- A USB cable (type depends on your board).
- :ref:`BioAmp Hardware <upsidedownlabs_hardware_home>` and its accessories (cables, electrodes, gel).

.. _chords-supported-boards:

Supported Boards
================

Chords-Web detects your board automatically and sets the ADC resolution, number of channels and sampling rate for you.

.. list-table::
   :widths: 40 15 15 20 10
   :header-rows: 1

   * - **Board**
     - **ADC Resolution**
     - **Channels**
     - **Sampling Rate**
     - **Connection**
   * - Arduino UNO R3 / Genuino UNO / Maker UNO (UNO clone)
     - 10-bit
     - 6
     - 250 Hz
     - Serial
   * - Arduino Nano Classic / Nano clone
     - 10-bit
     - 8
     - 250 Hz
     - Serial
   * - Arduino MEGA 2560 R3 / MEGA 2560 clone
     - 10-bit
     - 16
     - 250 Hz
     - Serial
   * - Arduino UNO R4 Minima / UNO R4 WiFi
     - 14-bit
     - 6
     - 500 Hz
     - Serial
   * - Arduino GIGA R1
     - 16-bit
     - 6
     - 500 Hz
     - Serial
   * - Raspberry Pi Pico (RP2040)
     - 12-bit
     - 3
     - 500 Hz
     - Serial
   * - STM32G4 Core Board
     - 12-bit
     - 16
     - 250 Hz
     - Serial
   * - STM32F4 Black Pill (STM32F401CC / STM32F411CE)
     - 12-bit
     - 8
     - 500 Hz
     - Serial
   * - ESP32-S3
     - 12-bit
     - 16
     - 250 Hz
     - Serial
   * - :ref:`NPG Lite <neuro-play-ground-lite>` (3 channel / 6 channel)
     - 12-bit
     - 3 or 6
     - 500 Hz
     - Serial or BLE

.. tip::

   You can also use any other microcontroller, as long as it sends data in the :ref:`Chords data format <chords-data-format>`.

Setting up the Hardware
***********************

Make all the connections for the hardware you are using:

1. Connect the BioAmp sensor to the analog input pins of your development board.
2. Connect the electrodes from the BioAmp sensor to your body.
3. Connect the development board to your laptop using a USB cable.

You can see diagrams of these connections (cable connections, BioAmp to board connections and electrode placement for ECG and EOG) on the Chords-Web page after you click **Visualize Now**, before you connect a device.

.. _chords-uploading-firmware:

Uploading the Firmware
**********************

Your board needs the Chords firmware so that it can send data to Chords-Web. Choose any one of the options below.

.. _chords-firmware-update:

Option 1: Update firmware from Chords-Web (Recommended)
=======================================================

You don't need the Arduino IDE for this option.

1. Connect your board to your laptop with a USB cable.
2. Open `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech/>`_, click **Visualize Now** and then click **Serial**.
3. Select your board's port and click **Connect**.
4. If the board is supported but doesn't have the latest Chords firmware, a **"Your firmware is not updated"** dialog opens.
5. If several boards share the same USB ID (for example, UNO clones and Nano clones), select which board you have.
6. Click **Flash firmware**. Chords-Web downloads the latest firmware release and uploads it to your board.
7. When it shows **Firmware updated**, Chords-Web reconnects to your board automatically.

.. note::

   - **STM32 boards**: If the board is still in normal mode, put it in boot mode first. Hold **BOOT0**, tap **NRST**, release **BOOT0**, and click **Flash firmware** again.
   - **Windows**: Some boards need a USB driver before they can be flashed (only once per PC). If flashing doesn't start within 15 seconds, follow the steps in the dialog to install the driver using **ChordsDriverSetup.exe** or **Zadig** (choose **WinUSB** and click **Install Driver**). Then replug the board and click **Flash firmware** again.

Option 2: Upload firmware with the Arduino IDE
==============================================

1. Connect your board to your laptop with a USB cable.
2. Go to the `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ GitHub repository, scroll to the supported boards table and open the sketch for your board.
3. Copy the sketch and paste it into the Arduino IDE.
4. Go to ``Tools > Board`` and select your board.
5. Go to ``Tools > Port`` and select your board's port. This is the port that disappears when you unplug the board:

   - **Windows**: ``COM3``, ``COM4``, etc.
   - **Linux**: ``/dev/ttyACM0`` or ``/dev/ttyUSB0``
   - **macOS**: ``/dev/cu.usbmodem...`` or ``/dev/cu.usbserial...``

6. Click the **Upload** button.
7. Close the Arduino IDE Serial Monitor/Plotter (only one app can use the port at a time) and open Chords-Web.

Option 3: NPG Lite and ESP32 boards
===================================

Use one of these tools to upload the Serial or BLE firmware to your NPG Lite or any ESP32 based board:

- **NPG Lite Flasher Web**: Runs in your browser, nothing to install. Open `upsidedownlabs.github.io/NPG-Lite-Flasher-Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_, click **Connect Device**, select the **BLE** or **Serial** firmware and click **Flash Firmware**.
- **NPG Lite Flasher**: A desktop app for Windows, macOS and Linux.

.. only:: html

   .. grid:: 1 2 2 2
      :margin: 4 4 0 0
      :gutter: 2

      .. grid-item-card:: NPG Lite Flasher Web
         :text-align: center
         :link: npg-lite-flasher-web
         :link-type: ref

      .. grid-item-card:: NPG Lite Flasher
         :text-align: center
         :link: npg-lite-flasher
         :link-type: ref

Connecting to Chords-Web
************************

1. Open a :ref:`supported browser <chords-browsers-compatibility>` and go to `chords.upsidedownlabs.tech <https://chords.upsidedownlabs.tech/>`_.
2. Click **Visualize Now**.
3. The images in the center show how to connect your hardware.
4. The bottom bar has three buttons:

   - **BLE**: Connect an NPG Lite over Bluetooth.
   - **Serial**: Connect any supported board over a USB cable.
   - **Serial Wizard**: Open the :ref:`Serial Wizard Plotter & Monitor <chords-web-serial-wizard>`.

.. figure:: ./media/chords_connectpage.*
    :align: center
    :alt: Chords-Web Connect Page

    Chords-Web Connect Page

Connecting over Serial (USB)
============================

1. Click **Serial**.
2. Your browser shows a list of serial ports. Select your board and click **Connect**.
3. Chords-Web detects your board, and the Chords Visualizer starts plotting your signals.

.. dropdown:: Linux: Board not listed or "permission denied"
   :icon: alert

   On Linux your user must be allowed to access serial ports. Add yourself to the right group, then log out and log back in:

   - **Arch / Manjaro**:

     .. code-block:: bash

        sudo usermod -aG uucp $USER

   - **Ubuntu / Debian**:

     .. code-block:: bash

        sudo usermod -aG dialout $USER

.. _chords-web-npg-lite:

Connecting over Bluetooth (NPG Lite)
====================================

The :ref:`NPG Lite <neuro-play-ground-lite>` can stream data wirelessly over Bluetooth Low Energy (BLE). It has a built-in BioAmp and a 12-bit ADC (ESP32-C6), so you don't need any other development board.

.. figure:: ./media/chords_npg_lite.*
   :align: center
   :alt: Chords-Web NPG Lite

   Chords-Web NPG Lite

1. **Flash the BLE firmware**: Use the :ref:`NPG Lite Flasher Web <npg-lite-flasher-web>` or the :ref:`NPG Lite Flasher <npg-lite-flasher>` to upload the **BLE firmware** (3 channel or 6 channel) to your NPG Lite.
2. **Power on** the NPG Lite using its on/off switch.
3. **Turn on Bluetooth** on your computer.
4. Open Chords-Web, click **Visualize Now** and then click **BLE**.
5. Select your NPG Lite (its name starts with ``NPG``) from the list and click **Pair**.
6. Your signals start plotting. You can now use any of the :ref:`applications <chords-applications>` below.

**Features over BLE:**

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Wireless Streaming**
     - Stream 3 or 6 channels of biopotential data at 500 Hz without a cable.
   * - **Battery Indicator**
     - The bottom bar shows the battery level of your NPG Lite. You get a warning when the battery is low and a message when it is fully charged (3CH/6CH firmware only).
   * - **Interactive Controls**
     - Select channels, play/pause the stream, apply filters and record to CSV, just like over Serial.

.. note::

   If you don't see the battery level, your NPG Lite has older BLE firmware. Update it with the :ref:`NPG Lite Flasher Web <npg-lite-flasher-web>` or the :ref:`NPG Lite Flasher <npg-lite-flasher>`.

.. note::
  Checkout our YouTube video for more information:

  .. youtube:: 3YCioyc4uKs

Common Controls
***************

These controls are in the bottom bar and work in all the applications, unless mentioned otherwise.

.. figure:: ./media/chords_icon.*
    :align: center
    :alt: Chords-Web Icons

    Chords-Web Icons

App Switcher
============

After you connect, use the app switcher in the bottom bar to move between the four applications. You don't need to reconnect your board when you switch.

- **Chords Visualizer**: Raw multi-channel waveform.
- **FFT Visualizer**: Spectrum and EEG band power.
- **Rep-Forge**: EMG envelope and muscle strength.
- **ECG Visualizer**: Heart rate with R-peaks.

.. note::

   Filters are reset every time you switch to another application, so a filter you chose in one view doesn't keep running in another.

Play/Pause and Data Windows
===========================

- Click **Pause** to freeze the screen on the current data window.
- While paused, use the **Previous Data Window** (left) and **Next Data Window** (right) buttons to go back through up to **5 earlier data windows**.
- Click **Play** to continue the live stream.
- Changing the selected channels resets the saved data windows.
- Pause is not available while recording.

Settings (Zoom, Time Base and Channels)
=======================================

Click the **Settings** icon to open the settings popover:

- **Zoom Level**: Zoom from **1x to 10x** to see small signal details or the full signal.
- **Time Base**: Show **1 to 10 seconds** of data on the screen.
- **Channels**: Select the channels you want to plot. The number of available channels depends on your board (up to 16). Use **Select All** to choose all channels and **Reset** to go back to your previous selection.

.. figure:: ./media/chords_channelsupport.*
    :align: center
    :alt: Chords-Web Channel Support

    Chords-Web Channel Support

.. _chords-web-filters:

Filters
=======

Click **Filter** to clean up your signal. You can apply a filter to one channel or to all channels at once using the master buttons at the top.

.. list-table::
   :widths: 20 30 50
   :header-rows: 1

   * - **Filter**
     - **Type**
     - **Use it for**
   * - **Muscle**
     - 70 Hz high-pass
     - EMG (muscle) signals
   * - **Heart**
     - 30 Hz low-pass
     - ECG (heart) signals
   * - **Eye**
     - 10 Hz low-pass
     - EOG (eye) signals
   * - **Brain**
     - 45 Hz low-pass
     - EEG (brain) signals
   * - **50 Hz / 60 Hz**
     - Notch
     - Removes power line noise. Use 50 Hz in India, Europe, etc. and 60 Hz in the USA, etc.

.. figure:: ./media/chords_filters.*
    :align: center
    :alt: Chords-Web Filters

    Chords-Web Filters

.. note::

   - A **1 Hz high-pass** filter is always applied to remove DC drift, even when no other filter is selected.
   - The Muscle, Heart, Eye and Brain filters are available in the **Chords Visualizer**. **Rep-Forge** has only the Muscle filter and the 50/60 Hz notch filter.

Recording the Data
==================

.. figure:: ./media/chords_recordingTime.*
    :align: center
    :alt: Recording Time

    Recording Time

1. Click the **Record** (red circle) button to start recording in **CSV format**.
2. To stop automatically, set an end time: choose **1, 10, 20 or 30 minutes**, or type your own time in minutes. You can also record without a time limit and click **Stop** when you are done.
3. Recordings can be at most **24 hours** (1440 minutes) long.

Recorded files are saved in your browser (using **IndexedDB**), so they are not lost if you disconnect your board. Click the **Files** button to manage them:

- **Download** or **delete** a single file.
- **Download All as Zip** or **Delete All** with one click.

.. figure:: ./media/chords_filesaveordelete.*
    :align: center
    :alt: Save and Delete Option

    Save and Delete Option

Each CSV file has a ``Counter`` column followed by one column per selected channel (``Channel1``, ``Channel2``, ...). You can plot these files with the :ref:`Chords CSV Plotter <chords-csv-plotter>`.

Disconnecting
=============

Click the **Disconnect** button to stop the data stream and disconnect your board.

Other Options to Explore
========================

- **Switch Theme**: Switch between light and dark mode using the theme button in the navigation bar.
- **Version**: The navigation bar shows the version of Chords-Web you are using.
- **GitHub Repository**: Open the Chords-Web GitHub repository using the link in the navigation bar.
- **Contributors**: See the list of contributors using the link in the top-right corner of the navigation bar.

.. _chords-applications:

Applications
************

.. _chords-visualizer:

Chords Visualizer
=================

The Chords Visualizer is the default application. It plots your raw biopotential signals from multiple channels in real time. Use it to monitor EMG, ECG, EOG or EEG signals, apply filters and record your data.

Features
--------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Auto Board Detection**
     - Instantly detects **BioAmp Hardware** running the **Chords firmware** and sets the ADC resolution, channels and sampling rate automatically.
   * - **Real-time Visualization**
     - Smooth, real-time data rendering powered by `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_.
   * - **Multi-channel Plotting**
     - Plots **up to 16 channels**, depending on your board, each in a different color.
   * - **Data Windows**
     - Pause and go back through the **last 5 data windows**.
   * - **Zoom & Time Base**
     - Zoom from 1x to 10x and show 1 to 10 seconds of data on the screen.
   * - **Filters**
     - Muscle, Heart, Eye and Brain filters, and 50/60 Hz notch filters, per channel or for all channels.
   * - **Recording & Data Management**
     - Record data in **CSV format** with or without a timer. Download or delete files individually or as a ZIP.

Running the Application
-----------------------

1. Connect your board (see `Connecting to Chords-Web`_). The Chords Visualizer opens automatically.
2. Open **Settings** to select channels and adjust the zoom and time base.
3. Click **Filter** and choose a filter for the signal you are recording (for example, **Muscle** for EMG).
4. Click **Record** to save your data, and use the **Files** button to download it.

Visualizing EMG (Electromyography) signals
-------------------------------------------

EMG captures the electrical activity produced by skeletal muscles. Use the **Muscle** filter.

.. figure:: ./media/chords_emg_signal.*
   :alt: EMG Signal Example
   :width: 600px
   :align: center

   EMG Signal Example

Visualizing EEG (Electroencephalography) signals
--------------------------------------------------

EEG records the electrical activity of the brain. Use the **Brain** filter.

.. figure:: ./media/chords_eeg_signal.*
   :alt: EEG Signal Example
   :width: 600px
   :align: center

   EEG Signal Example

.. tip::

   To ensure you're recording a high-quality signal, refer to the detailed guide here: :ref:`Troubleshooting EEG Signal Quality <recording_quality_eeg>`.

Visualizing EOG (Electrooculography) signals
---------------------------------------------

EOG measures the electrical potential generated by eye movements. Use the **Eye** filter.

.. figure:: ./media/chords_eog_signal.*
   :alt: EOG Signal Example
   :width: 600px
   :align: center

   EOG Signal Example

Visualizing ECG (Electrocardiography) signals
-------------------------------------------------

ECG records the electrical activity of the heart and shows your heart rhythm. Use the **Heart** filter.

.. figure:: ./media/chords_ecg_signal.*
   :alt: ECG Signal Example
   :width: 600px
   :align: center

   ECG Signal Example

.. _chords-web-fft-visualizer:

FFT Visualizer
==============

Overview
--------

The FFT Visualizer uses **FFT (Fast Fourier Transform)** to show the frequencies present in your signal and the power of each **EEG band**. Use it to see your brainwaves and track your focus in real time.

.. figure:: ./media/chords_fft_visualiser.*
   :align: center
   :alt: Chords-Web FFT Visualiser

   Chords-Web FFT Visualiser

Features
--------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Live EEG Band Monitoring**
     - View real-time EEG band power values to track brain activity.
   * - **Beta Candle**
     - A candle that glows brighter when your beta (focus) activity is higher.
   * - **Channel Selection**
     - Choose which channel to analyze from the **Settings** icon (Channel 1 by default).
   * - **Data Windows**
     - Pause and go back through the last 5 data windows.
   * - **Recording**
     - Record the data as a **CSV file** for further analysis.

Supported EEG Bands
-------------------

- **Delta (0.5 - 4 Hz)** → Associated with deep sleep and unconscious states.
- **Theta (4 - 8 Hz)** → Linked to relaxation, meditation, and light sleep.
- **Alpha (8 - 13 Hz)** → Reflects calm, wakeful relaxation, often seen during closed-eye rest.
- **Beta (13 - 30 Hz)** → Related to active thinking, problem-solving, and focus.
- **Gamma (30 - 45 Hz)** → Involved in high-level cognitive functioning, attention, and perception.

Running the Application
------------------------

1. Connect your board over **Serial** or **BLE** (see `Connecting to Chords-Web`_).
2. Select **FFT Visualizer** from the app switcher.
3. Open **Settings** and select the channel connected to your EEG electrodes.
4. The **top section** shows your EEG signal, filtered with the **Brain** filter (45 Hz low-pass) to remove noise.
5. The **bottom section** is divided into two parts:

   - **Left side** → The frequency spectrum (FFT) of your signal in Hz.
   - **Right side** → Two modes:

     - **Band Power Mode** → Real-time power of each EEG band.
     - **Beta Candle Mode** → A glowing candle that shows your focus level.

       - **Brighter candle** = Higher beta waves = Strong focus.
       - **Dim candle** = Lower beta waves = Distraction.

.. note::
  Checkout our YouTube video for more information:

  .. youtube:: zkPGzX3GKnk

.. _chords-web-rep-forge:

Rep-Forge
=========

Overview
--------

Rep-Forge shows the strength of your muscle contractions (EMG) in real time. Use it to monitor your muscles while you work out or during rehabilitation, directly in your browser.

.. figure:: ./media/chords_rep_forge.*
   :align: center
   :alt: Chords-Web Rep-Forge showing EMG signals on three channels with strength bars

   Chords-Web Rep-Forge

On the left, each channel shows the raw EMG signal (red) with its envelope (blue) on top. On the right, the strength bar of each channel rises as the muscle contracts. In the image above, only CH1 is active.

Features
--------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Multi-channel EMG**
     - Monitor **up to 6 EMG channels** at the same time.
   * - **EMG Envelope**
     - Shows the envelope of your EMG signal, which follows how strongly your muscle is contracting.
   * - **Live Strength Bars**
     - A bar for each channel shows the contraction level in real time, with the channel name at the top and the current value at the bottom.
   * - **Filters**
     - Muscle filter and 50/60 Hz notch filter to remove noise.
   * - **Data Windows & Recording**
     - Pause and go back through the last 5 data windows, and record to CSV.
   * - **Serial or BLE**
     - Works with any supported board over Serial, or with the NPG Lite over BLE.

Running the Application
------------------------

1. Place the electrodes on the muscle you want to monitor and connect them to your BioAmp sensor.
2. Connect your board over **Serial** or **BLE** (see `Connecting to Chords-Web`_).
3. Select **Rep-Forge** from the app switcher.
4. Open **Settings** and select up to 6 channels.
5. Contract your muscle and watch the strength bar for that channel go up.

Use Cases
---------

- **Strength Training**: Quantify muscle activation during lifts or repetitions.
- **Rehabilitation**: Monitor recovery progress in injured muscle groups.
- **Research**: Capture EMG data for neuromuscular studies.

.. _chords-web-ecg-visualizer:

ECG Visualizer
==============

Overview
--------

The ECG Visualizer shows your **heart rate** in real time. It detects the **R-peaks** (the tallest spike of each heartbeat) in your ECG signal and calculates your heart rate in beats per minute (BPM).

.. figure:: ./media/chords_ecg_visualiser.*
   :align: center
   :alt: Chords-Web ECG Visualizer showing an ECG signal with marked R-peaks and heart rate in BPM

   Chords-Web ECG Visualizer

Each detected R-peak is marked with a red dot and arrow, and your heart rate is shown in BPM at the top.

Features
--------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Heart Rate (BPM)**
     - Shows your live heart rate, with a heart icon that beats with each detected heartbeat.
   * - **R-peak Detection**
     - Detects R-peaks using the Pan-Tompkins algorithm.
   * - **Automatic ECG Filter**
     - The **Heart** filter is turned on for all channels automatically, for a clean ECG trace.
   * - **Channel Selection**
     - Choose which channel to analyze from the **Settings** icon (Channel 1 by default).

Running the Application
------------------------

1. Place the ECG electrodes on your body (the electrode placement diagram is shown on the Chords-Web connect page).
2. Connect your board over **Serial** or **BLE** (see `Connecting to Chords-Web`_).
3. Select **ECG Visualizer** from the app switcher.
4. Open **Settings** and select the channel connected to your ECG sensor.
5. Sit still and relaxed. After a few heartbeats, your heart rate appears on the screen.

.. note::

   The ECG Visualizer is for learning and experiments only. It is not medical software.

.. _chords-web-serial-wizard:

Serial Wizard Plotter & Monitor
=================================

Overview
--------

The **Serial Wizard Plotter & Monitor** is a standalone tool in Chords-Web that plots and prints data from any serial device, similar to the Arduino IDE Serial Plotter and Serial Monitor. Unlike the other applications, it works with any sketch - it doesn't need the Chords firmware.

.. figure:: ./media/chords_serialwizard.*
   :align: center
   :alt: Chords-Web Serial Wizard

   Chords-Web Serial Wizard

Features
--------

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Dual View Modes**
     - Switch between the **Plotter**, the **Monitor**, or both together.
   * - **Optimized Data Rendering**
     - Handles high-speed data without cluttering the display, so your plot stays clear and accurate.
   * - **Footer Button Bar**
     - Switch between viewing modes using the buttons at the bottom.
   * - **Baud Rate Selection**
     - Choose from 9600, 19200, 38400, 57600, 115200 (default), 230400, 460800 or 921600 baud.
   * - **Navigation Bar**
     - Switch theme (light/dark), visit the GitHub repository, view contributors or go back to the previous page.

Running the Application
-----------------------

1. Open Chords-Web, click **Visualize Now** and then click **Serial Wizard**.
2. Select the **Baud Rate**. It must match the value in your sketch's ``Serial.begin()``.
3. Click **Connect** and select your board's port.
4. Use the footer buttons to switch between the Plotter, the Monitor or both.

.. note::
  Checkout our YouTube video for more information:

  .. youtube:: -C_QUpwcEJQ

.. _chords-data-format:

Data Format and Data Quality
****************************

Data Format
===========

This section is for you if you want to use Chords-Web with your own board or firmware. The `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ already does all of this, so use it as a reference.

Commands
--------

Chords-Web sends these text commands to the board over Serial. Each command ends with a newline (``\n``):

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - **Command**
     - **What the board must do**
   * - ``WHORU``
     - Reply with its board ID on one line, for example ``UNO-R3``. Chords-Web uses this ID to set the channel count, ADC resolution and sampling rate.
   * - ``START``
     - Start sending data packets.
   * - ``STOP``
     - Stop sending data packets.

The board ID must be one of the IDs Chords-Web knows: ``UNO-R3``, ``GENUINO-UNO``, ``UNO-CLONE``, ``NANO-CLASSIC``, ``NANO-CLONE``, ``MEGA-2560-R3``, ``MEGA-2560-CLONE``, ``UNO-R4``, ``GIGA-R1``, ``RPI-PICO-RP2040``, ``STM32G4-CORE-BOARD``, ``STM32F4-BLACK-PILL``, ``NPG-LITE``, ``NPG-LITE-3CH``, ``NPG-LITE-6CH`` or ``ESP32-S3``. If you use your own board, reply with the ID of a supported board that has the same channel count, ADC resolution and sampling rate (see :ref:`chords-supported-boards`).

Chords-Web opens the port at **230400 baud**, unless it recognizes the board's USB ID (for example, Arduino UNO R3, Nano and MEGA boards use 115200 baud).

Packet Format
-------------

After ``START``, the board sends one binary packet for every sample:

.. code-block:: text

   | 0xC7 | 0x7C | counter | CH1 high | CH1 low | ... | CHn high | CHn low | 0x01 |

- ``0xC7 0x7C``: two sync bytes that mark the start of a packet.
- ``counter``: one byte (``uint8_t``) from 0 to 255. It goes up by 1 with every packet and starts again from 0 after 255.
- ``CH high, CH low``: the raw ADC value of each channel, as two bytes in big-endian order (high byte first).
- ``0x01``: the end byte.

So each packet is ``2 × channels + 4`` bytes long. For example, a 6-channel board sends 16-byte packets. The board must always send all of its channels, even if only some are selected in Chords-Web.

After decoding, Chords-Web uses each sample as ``[counter, CH1, CH2, ..., CHn]``. This is the same order as the columns in the recorded CSV file.

Checking for Dropped Samples
============================

- **Counter**: In your recorded CSV file, the ``Counter`` value should go up by exactly 1 in each row (after 255 it goes back to 0). If it skips a number, samples were dropped.
- **Number of samples**: The total number of rows should be close to *sampling rate × recording time in seconds*. For example, a 10-minute recording at 500 Hz should have about 500 × 60 × 10 = 300,000 samples. A big difference means samples were dropped or the timing has drifted.

Troubleshooting
***************

.. dropdown:: "Browser not supported" message
   :icon: alert

   Use the latest version of Google Chrome, Microsoft Edge or Opera on a desktop/laptop. See :ref:`chords-browsers-compatibility`.

.. dropdown:: My board doesn't appear in the port list
   :icon: alert

   - Make sure you are using a USB **data** cable, not a charge-only cable.
   - Close the Arduino IDE Serial Monitor/Plotter and any other app using the port.
   - On Linux, add your user to the ``uucp`` (Arch/Manjaro) or ``dialout`` (Ubuntu/Debian) group (see `Connecting over Serial (USB)`_).
   - On Windows, some boards need a USB driver (see :ref:`chords-firmware-update`).

.. dropdown:: "Your firmware is not updated" dialog appears
   :icon: alert

   Your board doesn't have the latest Chords firmware. Click **Flash firmware** to update it (see :ref:`chords-firmware-update`), or upload it with the Arduino IDE.

.. dropdown:: My NPG Lite doesn't appear in the Bluetooth list
   :icon: alert

   - Make sure the NPG Lite is switched on and has the **BLE firmware** (upload it with the :ref:`NPG Lite Flasher Web <npg-lite-flasher-web>` or the :ref:`NPG Lite Flasher <npg-lite-flasher>`).
   - Turn on Bluetooth on your computer.
   - Make sure the NPG Lite isn't already connected to another device or browser tab.

.. dropdown:: My signal is noisy
   :icon: alert

   - Apply the 50 Hz or 60 Hz notch filter, and the filter for your signal type (see :ref:`chords-web-filters`).
   - Unplug your laptop charger while recording.
   - Check that the electrodes are placed correctly and have good skin contact.
   - For EEG, see :ref:`Troubleshooting EEG Signal Quality <recording_quality_eeg>`.

Have a question or found a bug? Raise an issue on the `Chords-Web GitHub repository <https://github.com/upsidedownlabs/Chords-Web/issues>`_.

Technologies Used
*******************

.. only:: html

   .. grid:: 2 2 2 2
      :margin: 4 4 0 0
      :gutter: 2

      .. grid-item-card::
         :text-align: center
         :link: https://nextjs.org/
         :link-type: url

         .. figure:: https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg
            :alt: Next.js Logo
            :width: 50px
            :height: 50px
            :align: center

         **Next.js**
         A React framework for building web apps.

      .. grid-item-card::
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/Serial
         :link-type: url

         .. figure:: media/chords_serialdevice.*
            :alt: Web Serial API
            :width: 40px
            :height: 40px
            :align: center

         **Web Serial API**
         For communication with hardware devices.

      .. grid-item-card::
         :text-align: center
         :link: https://tailwindcss.com/
         :link-type: url

         .. figure:: ./media/chords_tailwindcss.*
            :alt: Tailwind CSS Logo
            :width: 50px
            :height: 50px
            :align: center

         **Tailwind CSS**
         A utility-first CSS framework.

      .. grid-item-card::
         :text-align: center
         :link: https://ui.shadcn.com/
         :link-type: url

         .. figure:: ./media/chords_shadcn.*
            :alt: Shadcn UI Logo
            :width: 40px
            :height: 40px
            :align: center

         **Shadcn UI**
         Advanced UI components for React.

      .. grid-item-card::
         :text-align: center
         :link: https://github.com/danchitnis/webgl-plot
         :link-type: url

         .. figure:: ./media/chords_webgl_plot.*
            :alt: WebGL Plot Logo
            :width: 50px
            :height: 50px
            :align: center

         **WebGL Plot**
         Real-time plotting with WebGL.

      .. grid-item-card::
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
         :link-type: url

         .. figure:: ./media/chords_Indexeddbdark.*
            :alt: IndexedDB API Logo
            :width: 40px
            :height: 40px
            :align: center

         **IndexedDB API**
         Local database for web applications.

Chords-Web also uses `TypeScript <https://www.typescriptlang.org/>`_, `Lucide <https://lucide.dev/>`_ icons, the `Web Bluetooth API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API>`_ (for the NPG Lite) and the `WebUSB API <https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API>`_ (for firmware updates).

.. figure:: ./media/chords_tech_stack.*
    :align: center
    :alt: Chords-Web Tech Stack

    Chords-Web Tech Stack
