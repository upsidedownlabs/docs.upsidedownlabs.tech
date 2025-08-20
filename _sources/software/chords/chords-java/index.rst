.. _chords-java:

Chords-Java
############

.. youtube:: sQgg8CEn9PY

Overview
********

**Chords Java** is an open-source Java-based project to acquire, visualize, and stream real-time biopotential signals such as **ECG**, **EMG**, **EEG**, and **EOG** from BioAmp hardware. Built with JavaFX and supporting LSL (Lab Streaming Layer), it provides a reliable, low-latency interface for research, prototyping, and educational neuroscience.

Features
********

+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Feature                   | Description                                                                                                                                                      |
+===========================+==================================================================================================================================================================+
| USB Serial Connection     | Detects and connects to compatible development boards over USB using `jSerialComm`. Supports real-time data acquisition without missing samples.                 |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Real-Time Visualization   | Displays multi-channel biopotential data with smooth waveform scrolling using JavaFX LineCharts.                                                                 |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sample Miss Detection     | Automatically detects and notifies on packet loss or missing samples using packet counters in the firmware.                                                      |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| LSL Streaming             | Streams synchronized multi-channel signals using Lab Streaming Layer (LSL), making it compatible with tools like Chords-LSL-Visualizer, OpenViBE, and Open Ephys |
+---------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+


Software Requirements
*********************

- `Java Development Kit (JDK 17+) <https://www.oracle.com/in/java/technologies/downloads/>`_ – Required for compiling and running the application  
- `VS Code <https://code.visualstudio.com/>`_ or any Java-compatible IDE   
- `jSerialComm <https://fazecast.github.io/jSerialComm/>`_ (already bundled in the repo)  
- `Arduino IDE <https://support.arduino.cc/hc/en-us/articles/360019833020-Download-and-install-Arduino-IDE>`_ - Required to upload firmware into the arduino board
- `Chords-LSL-Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer/releases/tag/v0.1.0>`_ - for live LSL streaming of data

Hardware Requirements
*********************

To use Chords-Java, you need:

- A development board running `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_  
- A USB cable  
- :ref:`BioAmp Hardware<upsidedownlabs_hardware_home>` and accessories (like electrodes)  

Setting up the Hardware
***********************

Connect your BioAmp signal chain:

1. Connect the gel electrodes or dry electrodes according to the type of signal being measured, such as ECG or EMG. For detailed placement guide :ref:`visit<using-gel-electrodes>`.  
2. Plug the BioAmp Hardware to the development board (e.g., Arduino UNO R4, ESP32, etc.).  
3. Connect the board to your laptop via USB.  
4. Upload the firmware (with correct baud rate and protocol) using Arduino IDE.

Uploading the Firmware
**********************

- Go to the `Chords Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ repo.  
- Find your board in the supported boards table.  
- Copy and paste the sketch into the Arduino IDE.  
- Select the correct board and COM port under **Tools**.  
- Upload the code.

.. _using-chords-java:

Using Chords-Java
******************

To launch and run the Java project:

1. **Download the Repository**:  

   - Visit `Chords-Java GitHub Repository <https://github.com/upsidedownlabs/Chords-Java>`_  
   - Or use Git Bash. 

   .. code-block:: console

      git clone https://github.com/upsidedownlabs/Chords-Java.git

2. **Navigate to project folder**:

   - Open Windows Terminal by ``Win + X`` and choose **Windows Terminal** from the menu. Alternatively, press ``Win + S``, type *Windows Terminal*, and press **Enter**.
   - Use the ``cd`` (change directory) command to go to the folder where your project is located. For example:

   .. code-block:: powershell

      cd "C:\Users\YourName\Downloads\Chords-Java"

   Replace the example path with the actual path to your project directory.

3. **Compile and Run**:

   For Comp
   - Use the following command to compile the code:

   .. code-block:: console

      javac -d bin -cp "lib/*" src/ChordsUSB.java examples/ChordsLSLStreamer.java      
   
   - Use the following command to run the code:
   
   .. code-block:: console

      java '-Djna.library.path=lib' -cp "bin;lib/*" ChordsLSLStreamer  


LSL Streaming
*************

To stream data into tools like `Chords LSL Visualizer <https://github.com/upsidedownlabs/Chords-LSL-Visualizer>`_:

1. Upload firmware with LSL support.
2. Run the ``ChordsLSLStreamer.java`` class.  
3. Ensure your PC can detect the USB device.
4. A stream named ``Chords_USB_Stream`` will appear in your LSL tool when you click on ``Refresh``.
5. Start the stream and visualize the live data.

.. note::
   LSL streaming is essential for running cross-platform applications and tools.

Applications
************

1. Electrocardiography (ECG) 
==============================

.. figure:: ./media/ECG_img.*
   :align: center
   :alt: Interface in Light Mode

- Displays real-time ECG waveform   

2. Electromyography (EMG) 
==========================

.. figure:: ./media/EMG_img.*
   :align: center
   :alt: Interface in Light Mode

- Visualizes filtered EMG signal and smooth envelope  
- Detects muscle activity in real time  
- Supports fine-tuning of RMS window and filtering parameters